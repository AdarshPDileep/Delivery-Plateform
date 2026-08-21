import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Download, Search } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function DataTable({
  columns, data, searchable = true, searchFields = [], paginate = true, pageSize = 10,
  onRowClick, selectable = false, actions, bulkActions, emptyMessage = 'No data found',
  exportable = false, title,
}) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);

  // Filter
  const filtered = useMemo(() => {
    if (!search) return data;
    const lower = search.toLowerCase();
    return data.filter(row =>
      (searchFields.length > 0 ? searchFields : columns.map(c => c.key)).some(f => {
        const val = typeof f === 'function' ? f(row) : row[f];
        return val && String(val).toLowerCase().includes(lower);
      })
    );
  }, [data, search, searchFields, columns]);

  // Sort
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      if (va == null) return 1; if (vb == null) return -1;
      const cmp = typeof va === 'string' ? va.localeCompare(vb) : va - vb;
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  // Paginate
  const totalPages = Math.ceil(sorted.length / pageSize);
  const paged = paginate ? sorted.slice((page - 1) * pageSize, page * pageSize) : sorted;

  const toggleSort = (key) => {
    if (sortKey === key) { setSortDir(d => d === 'asc' ? 'desc' : 'asc'); }
    else { setSortKey(key); setSortDir('asc'); }
  };

  const toggleSelectAll = () => {
    if (selected.length === paged.length) setSelected([]);
    else setSelected(paged.map((_, i) => (page - 1) * pageSize + i));
  };

  const toggleSelect = (idx) => {
    const globalIdx = (page - 1) * pageSize + idx;
    setSelected(prev => prev.includes(globalIdx) ? prev.filter(i => i !== globalIdx) : [...prev, globalIdx]);
  };

  const handleExport = (type) => {
    // Mock export — just show notification
    alert(`${type.toUpperCase()} export started for ${filtered.length} records.`);
  };

  return (
    <div>
      {/* Header */}
      {(searchable || exportable || title) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
            <span className="text-sm text-slate-400">{filtered.length} records</span>
          </div>
          <div className="flex items-center gap-2">
            {searchable && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 focus:bg-white transition-all w-48 lg:w-64"
                />
              </div>
            )}
            {exportable && (
              <div className="flex gap-1">
                <button onClick={() => handleExport('excel')} className="px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" /> Excel
                </button>
                <button onClick={() => handleExport('pdf')} className="px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bulk Actions */}
      {selectable && selected.length > 0 && bulkActions && (
        <div className="flex items-center gap-3 px-4 py-2.5 mb-3 bg-navy-50 rounded-lg border border-navy-200">
          <span className="text-sm font-medium text-navy-700">{selected.length} selected</span>
          <div className="flex gap-2">
            {bulkActions.map(action => (
              <button key={action.label} onClick={() => action.onClick(selected.map(i => data[i]))}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-navy-200 rounded-lg hover:bg-navy-100 text-navy-700 transition-colors">
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200/80 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/80">
              {selectable && (
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" checked={selected.length === paged.length && paged.length > 0} onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
                </th>
              )}
              {columns.map(col => (
                <th key={col.key} onClick={() => col.sortable !== false && toggleSort(col.key)}
                  className={`text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 ${col.sortable !== false ? 'cursor-pointer hover:text-slate-700 select-none' : ''} ${col.className || ''}`}>
                  <div className="flex items-center gap-1">
                    {col.label}
                    {sortKey === col.key && (sortDir === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                  </div>
                </th>
              ))}
              {actions && <th className="text-right py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paged.length === 0 ? (
              <tr><td colSpan={columns.length + (selectable ? 1 : 0) + (actions ? 1 : 0)} className="text-center py-12 text-slate-400">{emptyMessage}</td></tr>
            ) : paged.map((row, idx) => (
              <tr key={row.id || idx} onClick={() => onRowClick?.(row)}
                className={`hover:bg-slate-50/50 transition-colors ${onRowClick ? 'cursor-pointer' : ''} ${selected.includes((page - 1) * pageSize + idx) ? 'bg-navy-50/30' : ''}`}>
                {selectable && (
                  <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                    <input type="checkbox" checked={selected.includes((page - 1) * pageSize + idx)} onChange={() => toggleSelect(idx)}
                      className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
                  </td>
                )}
                {columns.map(col => (
                  <td key={col.key} className={`py-3 px-4 ${col.className || ''}`}>
                    {col.render ? col.render(row[col.key], row) : col.type === 'status' ? <StatusBadge status={row[col.key]} /> : <span className="text-slate-700">{row[col.key] ?? '—'}</span>}
                  </td>
                ))}
                {actions && (
                  <td className="py-3 px-4 text-right" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      {actions(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {paginate && totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-slate-500">
            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, sorted.length)} of {sorted.length}
          </p>
          <div className="flex items-center gap-1">
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const p = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i;
              return (
                <button key={p} onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === p ? 'bg-navy-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                  {p}
                </button>
              );
            })}
            <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
