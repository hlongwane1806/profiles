import fetch from 'cross-fetch';
import Router from 'next/router';
const results = 10;
export function getProfiles(pageNumber, seed) {
  if(seed){
    return fetch(`https://randomuser.me/api/?page=${pageNumber}&seed=${seed}&results=${results}`);
  }
  return fetch(`https://randomuser.me/api/?page=${pageNumber}&results=${results}`);
}

export function getProfile(pageNumber, seed){
  return fetch(`https://randomuser.me/api/?page=${pageNumber}&seed=${seed}&results=${results}`);
}

export function getPage(pageNumber,seed){
  
  return Router.push(`/?page=${pageNumber}&seed=${seed}&results=${results}`);
}
