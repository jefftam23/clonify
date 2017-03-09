export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};

export const fetchUserDetails = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const createUserFollow = (userFollow) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user_follows',
    data: { userFollow }
  });
};

export const deleteUserFollow = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/user_follows/${id}`
  });
};
