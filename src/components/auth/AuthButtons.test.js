import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

describe('when user is not signed in', () => {
  // createServer() ---> GET 'api/user' ---> { user: null }
  createServer([
    {
      path: '/api/user',
      res: () => {
        return {
          user: null,
        }
      }
    }
  ]);

  test('when user is not signed in, sign in and sign up are visible', async () => {
    console.log('first test');
  });

  test('when user is not signed in, sign out is not visible', async () => {
    console.log('second test');
  });
});

describe('when user is signed in', () => {
  // createServer() ---> GET 'api/user' ---> { user: { id: 3, email: 'asdf@a.com' } }
  createServer([
    {
      path: '/api/user',
      res: () => {
        return {
          user: {
            id: 1,
            email: 'a@a.com',
          },
        }
      }
    }
  ]);

  test('when user is signed in, sign in and sign up are not visible', async () => {
    console.log('third test');
  });

  test('when user is signed in, sign is visible', async () => {
    console.log('fourth test');
  });
});

