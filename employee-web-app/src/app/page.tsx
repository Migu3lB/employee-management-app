"use client";

import { useState, useEffect, useCallback } from "react";
import { Employee, CreateEmployeeDto } from "@/types/employee";
import { employeeService } from "@/services/employeeService";
import { EmployeeList } from "@/components/EmployeeList";
import { EmployeeForm } from "@/components/EmployeeForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadEmployees = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await employeeService.getAll();
      setEmployees(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load employees");
      console.error("Error loading employees:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const handleCreate = async (data: CreateEmployeeDto) => {
    try {
      setIsSubmitting(true);
      setError(null);
      await employeeService.create(data);
      await loadEmployees();
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create employee");
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (data: CreateEmployeeDto) => {
    if (!editingEmployee) return;

    try {
      setIsSubmitting(true);
      setError(null);
      await employeeService.update(editingEmployee.id, data);
      await loadEmployees();
      setEditingEmployee(null);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update employee");
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setError(null);
      await employeeService.delete(id);
      await loadEmployees();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete employee");
      console.error("Error deleting employee:", err);
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleAddNew = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Management</h1>
          <p className="text-gray-600">Manage your team members and their information</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-6">
          {!showForm && (
            <div className="flex justify-end">
              <Button onClick={handleAddNew}>
                <Plus className="h-4 w-4 mr-2" />
                Add Employee
              </Button>
            </div>
          )}

          {showForm ? (
            <EmployeeForm employee={editingEmployee} onSubmit={editingEmployee ? handleUpdate : handleCreate} onCancel={handleCancel} isLoading={isSubmitting} />
          ) : (
            <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
}
