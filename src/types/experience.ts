export interface Job {
  company: string;
  period: string;
  location: string;
  role?: string;
  description?: string;
  roles?: SubRole[];
}

export interface SubRole {
  title: string;
  period: string;
  description: string;
}
