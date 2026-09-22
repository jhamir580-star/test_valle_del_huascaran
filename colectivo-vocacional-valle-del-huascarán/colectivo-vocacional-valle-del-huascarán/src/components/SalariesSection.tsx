import { useState, useMemo, useEffect } from 'react';
import { 
  DollarSign, 
  Search, 
  Wrench, 
  GraduationCap, 
  ArrowUpDown, 
  TrendingUp, 
  Sparkles,
  LayoutGrid,
  Table as TableIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { TECNICAS_DATA, UNIVERSITARIAS_DATA } from '../data/salariesData';
import { SalaryRecord } from '../types';

export const SalariesSection = () => {
  const [activeTab, setActiveTab] = useState<'tecnicas' | 'universitarias'>('tecnicas');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'youngSalary' | 'adultSalary'>('rank');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  
  // Pagination state: default 6 cards per page for great mobile & desktop readability
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  // Normalize text removing accents for search
  const normalize = (txt: string) =>
    txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const dataList = activeTab === 'tecnicas' ? TECNICAS_DATA : UNIVERSITARIAS_DATA;

  const filteredData = useMemo(() => {
    let result = [...dataList];

    if (searchTerm.trim()) {
      const q = normalize(searchTerm);
      result = result.filter(
        item => normalize(item.name).includes(q) || normalize(item.field).includes(q)
      );
    }

    if (sortBy === 'youngSalary') {
      result.sort((a, b) => b.numYoung - a.numYoung);
    } else if (sortBy === 'adultSalary') {
      result.sort((a, b) => b.numAdult - a.numAdult);
    } else {
      result.sort((a, b) => a.rank - b.rank);
    }

    return result;
  }, [dataList, searchTerm, sortBy]);

  // Reset to first page when tab, search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchTerm, sortBy, pageSize]);

  // Paginated slice for cards view
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    const validPage = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(validPage);
    // Smooth scroll to cards container
    const container = document.getElementById('salaries-cards-anchor');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="sueldos" className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3 shadow-xs">
            <DollarSign className="w-3.5 h-3.5" />
            Datos Oficiales del Observatorio Ponte en Carrera (MTPE)
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Observatorio de Sueldos Oficiales del Perú
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Consulta los ingresos promedio mensuales reportados formalmente para jóvenes egresados (18 a 29 años) y profesionales en madurez laboral (30+ años).
          </p>
        </div>

        {/* Insight Callout Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg shadow-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-800/50">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                ¿Sabías qué? La educación técnica ofrece retornos inmediatos
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed">
                Un <strong>Técnico en Minería</strong> (S/ 6,871) o un <strong>Técnico Electricista</strong> (S/ 3,849) supera el ingreso promedio inicial de más del 70% de carreras universitarias. ¡Compara ambas rutas con datos reales!
              </p>
            </div>
          </div>
        </div>

        {/* Tabs and Controls Container */}
        <div id="salaries-cards-anchor" className="bg-white rounded-3xl border border-slate-200 shadow-md p-4 sm:p-6 mb-8">
          
          {/* Main Tabs (Técnicas vs Universitarias) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
              <button
                id="tab-tecnicas-btn"
                onClick={() => {
                  setActiveTab('tecnicas');
                  setSearchTerm('');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'tecnicas'
                    ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Carreras Técnicas ({TECNICAS_DATA.length})</span>
              </button>

              <button
                id="tab-universitarias-btn"
                onClick={() => {
                  setActiveTab('universitarias');
                  setSearchTerm('');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'universitarias'
                    ? 'bg-blue-900 text-white shadow-sm ring-2 ring-blue-900/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Carreras Universitarias ({UNIVERSITARIAS_DATA.length})</span>
              </button>
            </div>

            {/* View Mode Toggle (Cards vs Table) */}
            <div className="hidden md:flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-end">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Vista de Tarjetas Paginadas"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Tarjetas</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Vista de Tabla Completa"
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Tabla</span>
              </button>
            </div>

          </div>

          {/* Search Bar, Sorter & Page size */}
          <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder={`Buscar carrera ${activeTab === 'tecnicas' ? 'técnica' : 'universitaria'} (ej. minería, mecánica, derecho)...`}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-sm outline-none transition-all placeholder:text-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorter Selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="w-full md:w-auto px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-700 font-medium outline-none focus:border-teal-500 cursor-pointer"
              >
                <option value="rank">Ordenar por Ranking Oficial</option>
                <option value="youngSalary">Mayor Sueldo Inicial (18-29 años)</option>
                <option value="adultSalary">Mayor Sueldo Maduro (30+ años)</option>
              </select>
            </div>

            {/* Cards per page selector */}
            {viewMode === 'cards' && (
              <div className="flex items-center gap-1.5 text-xs text-slate-500 self-end sm:self-auto">
                <span className="hidden sm:inline">Mostrar:</span>
                <select
                  value={pageSize}
                  onChange={e => setPageSize(Number(e.target.value))}
                  className="px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-700 font-semibold outline-none focus:border-teal-500 cursor-pointer"
                >
                  <option value={6}>6 tarjetas</option>
                  <option value={9}>9 tarjetas</option>
                  <option value={12}>12 tarjetas</option>
                  <option value={20}>20 tarjetas</option>
                </select>
              </div>
            )}

          </div>

          {/* Results count and pagination summary */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Mostrando <strong>{paginatedData.length}</strong> de <strong>{filteredData.length}</strong> carreras {activeTab === 'tecnicas' ? 'técnicas' : 'universitarias'}
            </span>
            {viewMode === 'cards' && totalPages > 1 && (
              <span className="font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/60">
                Página {currentPage} de {totalPages}
              </span>
            )}
            {searchTerm && (
              <span className="text-teal-700 font-semibold">
                Filtro: "{searchTerm}"
              </span>
            )}
          </div>

        </div>

        {/* Content Render: Cards View with Pagination */}
        {viewMode === 'cards' ? (
          <div>
            {paginatedData.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {paginatedData.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white rounded-2xl border border-slate-200/90 hover:border-teal-500/80 shadow-sm hover:shadow-md transition-all p-4 sm:p-5 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Bar with Ranking and Tag */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-slate-100 text-slate-800 font-extrabold text-xs">
                            Puesto #{item.rank}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 truncate max-w-[180px]">
                            {item.field}
                          </span>
                        </div>

                        {/* Career Name */}
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug min-h-[44px] flex items-center">
                          {item.name}
                        </h4>
                      </div>

                      {/* Salary Metrics Box */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5">
                        {/* Young metric (18-29 años) */}
                        <div className="bg-teal-50/80 border border-teal-100/90 rounded-xl p-3 flex items-center justify-between shadow-2xs">
                          <div>
                            <div className="text-[11px] font-semibold text-teal-800">
                              Ingreso Promedio (18 a 29 años)
                            </div>
                            <div className="text-[10px] text-teal-600">
                              Rango: {item.rangeYoung}
                            </div>
                          </div>
                          <div className="text-base sm:text-lg font-black text-teal-900 shrink-0">
                            {item.avgYoung}
                          </div>
                        </div>

                        {/* Adult metric (30+ años) */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-medium text-slate-600">
                              Proyección (30+ años)
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Rango: {item.rangeAdult}
                            </div>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-slate-800 shrink-0">
                            {item.avgAdult}
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Horizontal Navigation & Pagination Arrows requested by user */}
                {totalPages > 1 && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    
                    <div className="text-xs text-slate-500 order-2 sm:order-1 text-center sm:text-left">
                      Mostrando {((currentPage - 1) * pageSize) + 1} - {Math.min(currentPage * pageSize, filteredData.length)} de {filteredData.length} carreras
                    </div>

                    {/* Arrow Navigation Controls */}
                    <div className="flex items-center gap-1.5 order-1 sm:order-2">
                      
                      {/* First Page */}
                      <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          currentPage === 1
                            ? 'opacity-40 pointer-events-none border-slate-200 text-slate-400 bg-slate-50'
                            : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300'
                        }`}
                        title="Primera página"
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>

                      {/* Previous Page */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          currentPage === 1
                            ? 'opacity-40 pointer-events-none border-slate-200 text-slate-400 bg-slate-50'
                            : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-teal-500 hover:text-teal-800 shadow-xs'
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior</span>
                      </button>

                      {/* Page number indicators */}
                      <div className="flex items-center gap-1 px-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(page => {
                            // Show first, last, and pages adjacent to current page
                            return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                          })
                          .map((page, idx, arr) => {
                            const prev = arr[idx - 1];
                            const showEllipsis = prev && page - prev > 1;

                            return (
                              <div key={page} className="flex items-center">
                                {showEllipsis && <span className="px-1 text-slate-400 text-xs">...</span>}
                                <button
                                  onClick={() => handlePageChange(page)}
                                  className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    currentPage === page
                                      ? 'bg-teal-700 text-white shadow-xs'
                                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                  }`}
                                >
                                  {page}
                                </button>
                              </div>
                            );
                          })}
                      </div>

                      {/* Next Page */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          currentPage === totalPages
                            ? 'opacity-40 pointer-events-none border-slate-200 text-slate-400 bg-slate-50'
                            : 'border-teal-600 bg-teal-50 text-teal-800 hover:bg-teal-100 shadow-xs'
                        }`}
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Last Page */}
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          currentPage === totalPages
                            ? 'opacity-40 pointer-events-none border-slate-200 text-slate-400 bg-slate-50'
                            : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300'
                        }`}
                        title="Última página"
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
                <Search className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                <p className="font-semibold">No se encontraron carreras con "{searchTerm}"</p>
                <p className="text-xs text-slate-400 mt-1">Intenta con otra palabra como 'minería', 'medicina' o 'industrial'</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 px-4 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Full Table View for Desktop / Tablet */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white sticky top-0 z-10">
                  <tr>
                    <th className="py-3 px-3.5 font-bold w-16">Puesto</th>
                    <th className="py-3 px-3.5 font-bold">Familia de Carrera</th>
                    <th className="py-3 px-3.5 font-bold">Ingreso Prom. (18-29)</th>
                    <th className="py-3 px-3.5 font-bold hidden md:table-cell">Rango (18-29)</th>
                    <th className="py-3 px-3.5 font-bold">Ingreso Prom. (30+)</th>
                    <th className="py-3 px-3.5 font-bold hidden lg:table-cell">Rango (30+)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((row) => (
                    <tr key={row.name} className="hover:bg-teal-50/40 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-500">#{row.rank}</td>
                      <td className="py-3 px-3.5 font-semibold text-slate-900">{row.name}</td>
                      <td className="py-3 px-3.5 font-bold text-teal-700">{row.avgYoung}</td>
                      <td className="py-3 px-3.5 text-slate-500 hidden md:table-cell">{row.rangeYoung}</td>
                      <td className="py-3 px-3.5 font-semibold text-slate-800">{row.avgAdult}</td>
                      <td className="py-3 px-3.5 text-slate-500 hidden lg:table-cell">{row.rangeAdult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
