
export const signup = (credentials) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.email === credentials.email);
  
    if (userExists) {
      throw new Error('User already exists');
    }
  
    storedUsers.push(credentials);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  };
  
  export const login = (credentials) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.email === credentials.email && user.password === credentials.password);
  
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
  
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('currentUser');
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  };
  
  