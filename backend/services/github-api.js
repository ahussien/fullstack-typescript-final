const axios = require('axios');
const logger = require('../services/logger');

const usersUrl = 'https://api.github.com/search/users';
const repositoriesUrl = 'https://api.github.com/search/repositories';

/**
 * Serach Githup
 * 
 * @param {String} searchType
 * @param {String} searchText
 * @return void
 */
exports.search = (searchType, searchText) => {

  logger.info('search requested!', { searchType: `${searchType}`, searchText: `${searchText}` });

  if (searchType === 'users') {
    return fetchUsers(searchText);
  }

  if (searchType === 'repositories') {
    return fetchRepositories(searchText);
  }
};

/**
 * Serach repositories
 * 
 * @param {String} searchText
 * @return void
 */
const fetchUsers = searchText => {
  return featchData(usersUrl, searchText)
};

/**
 * Serach repositories
 * 
 * @param {String} searchText
 * @return void
 */
const fetchRepositories = searchText => {
  return featchData(repositoriesUrl, searchText)
};

/**
 * Featch Data
 * 
 * @param {String} username
 * @return void
 */
const featchData = (url, searchText) => {
  //To Do add any auth token
  return axios.get(`${url}?q=${searchText}`);
};


// /**
//  * Serach repositories
//  * 
//  * @param {String} repository
//  * @return void
//  */
// exports.fetchRepositories = repository => {
//   console.log(repository);
//   let url = `https://api.github.com/search/repositories?q=${repository}`;
//   return axios.get(url);
// };


// /**
//  * Serach repositories
//  * 
//  * @param {String} repository
//  * @return void
//  */
// exports.fetchUsers = username => {
//   console.log(repository);
//   let url = `https://api.github.com/search/users?q=${username}`;
//   return axios.get(url);
// };
