'use client';

import { useForm } from 'react-hook-form';
import { Employee, CreateEmployeeDto } from '@/types/employee';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EmployeeFormProps {
  employee?: Employee | null;
  onSubmit: (data: CreateEmployeeDto) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export function EmployeeForm({ employee, onSubmit, onCancel, isLoading }: EmployeeFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeeDto>({
    defaultValues: employee || {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...register('firstName', {
                required: 'First name is required',
                maxLength: { value: 100, message: 'First name cannot exceed 100 characters' },
              })}
              placeholder="Enter first name"
              disabled={isLoading}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...register('lastName', {
                required: 'Last name is required',
                maxLength: { value: 100, message: 'Last name cannot exceed 100 characters' },
              })}
              placeholder="Enter last name"
              disabled={isLoading}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email format',
                },
                maxLength: { value: 200, message: 'Email cannot exceed 200 characters' },
              })}
              placeholder="Enter email address"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              {...register('position', {
                required: 'Position is required',
                maxLength: { value: 100, message: 'Position cannot exceed 100 characters' },
              })}
              placeholder="Enter position"
              disabled={isLoading}
            />
            {errors.position && (
              <p className="text-sm text-red-600">{errors.position.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : employee ? 'Update' : 'Create'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
