import { Employee, CreateEmployeeDto, UpdateEmployeeDto, ApiError } from '@/types/employee';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7219';
const AUTH_TOKEN = 'miguels-demo-token';

const getHeaders = (): HeadersInit => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${AUTH_TOKEN}`,
});

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: ApiError = await response.json().catch(() => ({ 
      error: `HTTP error! status: ${response.status}` 
    }));
    throw new Error(error.error || 'An error occurred');
  }
  
  if (response.status === 204) {
    return undefined as T;
  }
  
  return response.json();
}

export const employeeService = {
  async getAll(): Promise<Employee[]> {
    const response = await fetch(`${API_BASE_URL}/employee`, {
      headers: getHeaders(),
    });
    return handleResponse<Employee[]>(response);
  },

  async getById(id: number): Promise<Employee> {
    const response = await fetch(`${API_BASE_URL}/employee/${id}`, {
      headers: getHeaders(),
    });
    return handleResponse<Employee>(response);
  },

  async create(employee: CreateEmployeeDto): Promise<Employee> {
    const response = await fetch(`${API_BASE_URL}/employee`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(employee),
    });
    return handleResponse<Employee>(response);
  },

  async update(id: number, employee: UpdateEmployeeDto): Promise<Employee> {
    const response = await fetch(`${API_BASE_URL}/employee/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(employee),
    });
    return handleResponse<Employee>(response);
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/employee/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse<void>(response);
  },
};
