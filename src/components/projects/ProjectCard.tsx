import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types';
import { Calendar, Clock, User } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onEdit?: (project: Project) => void;
  onView?: (project: Project) => void;
}

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500';
    case 'in_progress':
      return 'bg-blue-500';
    case 'planned':
      return 'bg-gray-500';
    case 'on_hold':
      return 'bg-yellow-500';
    case 'dropped':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getPriorityColor = (priority: Project['priority']) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ProjectCard = ({ project, onEdit, onView }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              <div 
                className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}
                title={project.status}
              />
              {project.title}
            </CardTitle>
            <CardDescription className="mt-2">
              {project.description || 'No description provided'}
            </CardDescription>
          </div>
          <div className="flex gap-1">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge className={getPriorityColor(project.priority)}>
              {project.priority}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {/* Dates */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {project.start_date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Start: {new Date(project.start_date).toLocaleDateString()}
              </div>
            )}
            {project.end_date && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                End: {new Date(project.end_date).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Visibility */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span className="capitalize">{project.visibility}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onView?.(project)}
              className="flex-1"
            >
              View
            </Button>
            <Button 
              size="sm" 
              onClick={() => onEdit?.(project)}
              className="flex-1"
            >
              Edit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};