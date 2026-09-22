interface LogoProps {
  className?: string;
  alt?: string;
}

// 1. UNI - Universidad Nacional de Ingeniería (Logo Original Oficial)
export const UniLogo = ({ className = 'w-12 h-12', alt = 'Universidad Nacional de Ingeniería (UNI)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/uni.png" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 2. UNMSM - Universidad Nacional Mayor de San Marcos (Escudo Oficial Original)
export const UnmsmLogo = ({ className = 'w-12 h-12', alt = 'Universidad Nacional Mayor de San Marcos (UNMSM)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/unmsm.svg" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 3. UCS - Universidad Científica del Sur (Logo Original Oficial)
export const UcsLogo = ({ className = 'w-12 h-12', alt = 'Universidad Científica del Sur (UCS)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/ucsur.png" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 4. UNASAM - Universidad Nacional Santiago Antúnez de Mayolo (Huaraz - Escudo Oficial Original)
export const UnasamLogo = ({ className = 'w-12 h-12', alt = 'Universidad Nacional Santiago Antúnez de Mayolo (UNASAM)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/unasam_emblem.png" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 5. UCV - Universidad César Vallejo (Escudo Original Oficial)
export const UcvLogo = ({ className = 'w-12 h-12', alt = 'Universidad César Vallejo (UCV)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/ucv_shield.png" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 6. FFAA - Fuerzas Armadas del Perú (Emblema Oficial Comando Conjunto CCFFAA)
export const FfaaLogo = ({ className = 'w-12 h-12', alt = 'Fuerzas Armadas del Perú (CCFFAA)' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/ffaa_emblem.svg" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// 7. SENATI - Servicio Nacional de Adiestramiento en Trabajo Industrial (Logo Oficial Original)
export const SenatiLogo = ({ className = 'w-12 h-12', alt = 'SENATI' }: LogoProps) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80 p-1.5 shrink-0 overflow-hidden ${className}`}>
    <img 
      src="/logos/senati.svg" 
      alt={alt} 
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

// Master Logo Switcher Component
export const InstitutionLogo = ({ id, className }: { id: string; className?: string }) => {
  switch (id.toUpperCase()) {
    case 'UNI':
      return <UniLogo className={className} />;
    case 'UNMSM':
      return <UnmsmLogo className={className} />;
    case 'UCS':
      return <UcsLogo className={className} />;
    case 'UNASAM':
      return <UnasamLogo className={className} />;
    case 'UCV':
      return <UcvLogo className={className} />;
    case 'FFAA':
      return <FfaaLogo className={className} />;
    case 'SENATI':
      return <SenatiLogo className={className} />;
    default:
      return <UnasamLogo className={className} />;
  }
};
