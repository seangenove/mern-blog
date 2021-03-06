import Endpoints from "../config/Endpoints";
import { AppApiRequest } from "./index";

export const fetchProfile = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.USER_PROFILE, 'GET', onSuccess, onFailure);
    
};

export const fetchProfileById = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.PROFILE_BY_ID}/${id}`, 'GET', onSuccess, onFailure);
};

export const fetchAllProfiles = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PROFILE, 'GET', onSuccess, onFailure);
};

export const fetchGithubRepositories = (username, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.GITHUB_REPOS}/${username}`, 'GET', onSuccess, onFailure);
};

export const upsertProfile = (data, onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PROFILE, 'POST', onSuccess, onFailure, data);
};

export const deleteProfile = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PROFILE, 'DELETE', onSuccess, onFailure);
};

export const addExperience = (data, onSuccess, onFailure) => {
    AppApiRequest(Endpoints.EXPERIENCE, 'POST', onSuccess, onFailure, data);
};

export const deleteExperience = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.EXPERIENCE}/${id}`, 'DELETE', onSuccess, onFailure);
};

export const addEducation = (data, onSuccess, onFailure) => {
    AppApiRequest(Endpoints.EDUCATION, 'POST', onSuccess, onFailure, data);
};

export const deleteEducation = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.EDUCATION}/${id}`, 'DELETE', onSuccess, onFailure);
};
