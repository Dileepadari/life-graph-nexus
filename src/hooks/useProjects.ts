import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Project, ProjectStep } from '@/types';
import { toast } from '@/hooks/use-toast';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<Project[]> => {
      // Temporarily return empty array until database is ready
      return [];
    },
  });
};

export const useProjectSteps = (projectId: string) => {
  return useQuery({
    queryKey: ['project-steps', projectId],
    queryFn: async (): Promise<ProjectStep[]> => {
      // Temporarily return empty array until database is ready
      return [];
    },
    enabled: !!projectId,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
      // Temporarily mock success until database is ready
      toast({
        title: "Demo Mode",
        description: "Project creation will work once database is set up!",
      });
      return project;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Project> & { id: string }) => {
      // Temporarily mock success until database is ready
      toast({
        title: "Demo Mode",
        description: "Project updates will work once database is set up!",
      });
      return { id, ...updates };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};