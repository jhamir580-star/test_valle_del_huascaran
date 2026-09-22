interface SocialLinkProps {
  facebook?: string;
  instagram?: string;
  memberName?: string;
}

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path 
      d="M15.12 12.72l.48-3.12h-3v-2.02c0-.85.42-1.68 1.76-1.68H15.7V3.25c-.77-.1-1.55-.16-2.33-.15-2.37 0-3.92 1.44-3.92 4.04v2.46H6.7v3.12h2.75V21h3.4v-8.28h2.27z" 
      fill="#ffffff" 
    />
  </svg>
);

export const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6.5" fill="url(#instagram-grad)" />
    <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="3.8" stroke="#ffffff" strokeWidth="1.6" fill="none" />
    <circle cx="12" cy="12" r="3.2" stroke="#ffffff" strokeWidth="1.6" fill="none" />
    <circle cx="15.8" cy="8.2" r="0.9" fill="#ffffff" />
  </svg>
);

export const StudentSocialLinks = ({ facebook, instagram, memberName }: SocialLinkProps) => {
  if (!facebook && !instagram) return null;

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver perfil de Facebook de ${memberName || 'este integrante'}`}
          className="group relative inline-flex items-center justify-center p-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all hover:scale-105 active:scale-95"
          aria-label={`Facebook de ${memberName || 'integrante'}`}
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
      )}

      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver perfil de Instagram de ${memberName || 'este integrante'}`}
          className="group relative inline-flex items-center justify-center p-1 rounded-lg bg-white hover:bg-pink-50 border border-slate-200/80 hover:border-pink-300 shadow-2xs hover:shadow-xs transition-all hover:scale-105 active:scale-95"
          aria-label={`Instagram de ${memberName || 'integrante'}`}
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};
