// ===== Date Formatting =====
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export function formatTime(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit',
  });
}

export function relativeTime(dateStr) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(dateStr);
}

// ===== Currency =====
export function formatCurrency(amount) {
  if (amount == null) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num) {
  if (num == null) return '—';
  return new Intl.NumberFormat('en-IN').format(num);
}

// ===== AWB Generation =====
export function generateAWB() {
  const ts = Date.now().toString().slice(-8);
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CG${ts}${rand}`;
}

// ===== ID Generation =====
let counter = Date.now();
export function generateId(prefix = 'ID') {
  counter++;
  return `${prefix}${counter.toString().slice(-6)}`;
}

// ===== Clipboard =====
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// ===== Phone Formatting =====
export function formatPhone(phone) {
  if (!phone) return '—';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

// ===== Truncate =====
export function truncate(str, len = 40) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '…' : str;
}

// ===== Initials =====
export function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// ===== Percentage =====
export function calcPercent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

// ===== Filter array by search term =====
export function searchFilter(items, term, fields) {
  if (!term) return items;
  const lower = term.toLowerCase();
  return items.filter(item =>
    fields.some(f => {
      const val = typeof f === 'function' ? f(item) : item[f];
      return val && String(val).toLowerCase().includes(lower);
    })
  );
}

// ===== Sort =====
export function sortBy(items, key, dir = 'asc') {
  return [...items].sort((a, b) => {
    const va = a[key]; const vb = b[key];
    if (va == null) return 1; if (vb == null) return -1;
    const cmp = typeof va === 'string' ? va.localeCompare(vb) : va - vb;
    return dir === 'asc' ? cmp : -cmp;
  });
}

// ===== Paginate =====
export function paginate(items, page, perPage = 10) {
  const start = (page - 1) * perPage;
  return {
    data: items.slice(start, start + perPage),
    total: items.length,
    totalPages: Math.ceil(items.length / perPage),
    page,
    perPage,
  };
}

// ===== Today + N days =====
export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

// ===== Random from array =====
export function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
