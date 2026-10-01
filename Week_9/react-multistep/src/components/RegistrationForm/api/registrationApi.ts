import axios from 'axios';
import type { RegistrationFormData } from '../schemas/registrationSchema';

export type Registration = RegistrationFormData & { id: string };

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getRegistrations = async (): Promise<Registration[]> => {
  const response = await api.get<Registration[]>('/registrations');
  return response.data;
};

export const getRegistration = async (id: string): Promise<Registration> => {
  const response = await api.get<Registration>(`/registrations/${id}`);
  return response.data;
};

export const createRegistration = async (
  data: RegistrationFormData,
): Promise<Registration> => {
  const response = await api.post<Registration>('/registrations', data);
  return response.data;
};

export const updateRegistration = async (
  id: string,
  data: RegistrationFormData,
): Promise<Registration> => {
  const response = await api.put<Registration>(`/registrations/${id}`, data);
  return response.data;
};

export const deleteRegistration = async (id: string): Promise<void> => {
  await api.delete(`/registrations/${id}`);
};