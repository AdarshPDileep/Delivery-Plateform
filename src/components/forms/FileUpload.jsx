import React, { useState } from 'react';
import { UploadCloud, X, FileText } from 'lucide-react';

export default function FileUpload({ label, accept, multiple = false, onChange, className = '' }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files || []);
    const updated = multiple ? [...files, ...newFiles] : newFiles;
    setFiles(updated);
    if (onChange) onChange(multiple ? updated : updated[0]);
  };

  const removeFile = (idx) => {
    const updated = files.filter((_, i) => i !== idx);
    setFiles(updated);
    if (onChange) onChange(multiple ? updated : updated[0]);
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      
      <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-6 hover:bg-slate-50 transition-colors group text-center">
        <input 
          type="file" 
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <div className="w-10 h-10 bg-navy-50 text-navy-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-slate-700">Click or drag file to this area to upload</p>
          <p className="text-xs text-slate-400 mt-1">Support for a single or bulk upload.</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="truncate">
                  <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                  <p className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button type="button" onClick={() => removeFile(i)} className="p-1 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
