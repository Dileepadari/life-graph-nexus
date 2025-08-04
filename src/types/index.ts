export interface Profile {
  id: string;
  user_id: string;
  first_name?: string;
  last_name?: string;
  bio?: string;
  avatar_url?: string;
  skills?: string[];
  contact_email?: string;
  website?: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  category: 'personal' | 'professional' | 'miscellaneous';
  status: 'planned' | 'in_progress' | 'completed' | 'on_hold' | 'dropped';
  priority: 'high' | 'medium' | 'low';
  visibility: 'private' | 'shared' | 'public';
  color_tag?: string;
  start_date?: string;
  end_date?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectStep {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  status: 'todo' | 'doing' | 'done' | 'review';
  assigned_to?: string;
  start_date?: string;
  due_date?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Person {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  category: 'friend' | 'client' | 'mentor' | 'colleague' | 'family' | 'other';
  trust_level: number;
  notes?: string;
  last_contact?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Meeting {
  id: string;
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  meeting_type: 'appointment' | 'call' | 'meeting' | 'event';
  location?: string;
  meeting_link?: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  attendee_id?: string;
  project_id?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface FinanceEntry {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense' | 'investment';
  category: string;
  description?: string;
  date: string;
  tags?: string[];
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface KnowledgeNote {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  project_id?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}