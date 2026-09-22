export interface SalaryRecord {
  rank: number;
  name: string;
  category: 'tecnica' | 'universitaria';
  field: string;
  avgYoung: string; // 18-29 años
  rangeYoung: string;
  avgAdult: string; // 30+ años
  rangeAdult: string;
  numYoung: number; // for sorting
  numAdult: number;
}

export interface StudentRep {
  name: string;
  career: string;
  degreeType: 'universitaria' | 'tecnica' | 'militar';
  campus?: string;
  quote?: string;
  facebook?: string;
  instagram?: string;
}

export interface AllyInstitution {
  id: string;
  shortName: string;
  fullName: string;
  type: 'Universidad Pública' | 'Universidad Privada' | 'Instituto Superior Técnico' | 'Institución Castrense';
  icon: string;
  accentColor: string;
  students: StudentRep[];
  summary: string;
}

export interface QuizOption {
  text: string;
  category: ProfileCategory;
  description?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  situation: string;
  options: QuizOption[];
}

export type ProfileCategory =
  | 'ingenieria_mineria'
  | 'salud_biologia'
  | 'tecnologia_computo'
  | 'gestion_leyes'
  | 'tecnica_industrial'
  | 'seguridad_defensa'
  | 'diseno_artes'
  | 'agro_ambiental';

export interface VocationalProfileResult {
  category: ProfileCategory;
  title: string;
  headline: string;
  description: string;
  skills: string[];
  recommendedUniversity: {
    name: string;
    avgYoung: string;
    avgAdult: string;
    rangeYoung: string;
    keyUniversities: string[];
    description: string;
  };
  recommendedTechnical: {
    name: string;
    avgYoung: string;
    avgAdult: string;
    rangeYoung: string;
    keyInstitutes: string[];
    description: string;
  };
  allyContacts: {
    name: string;
    career: string;
    institution: string;
  }[];
}
