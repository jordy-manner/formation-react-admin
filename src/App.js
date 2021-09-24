import * as React from 'react'
import {Admin, Resource} from 'react-admin'
import {PostList, PostEdit, PostCreate} from './posts'
import {UserList} from './users'
import Dashboard from "./Dashboard";
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} options={{label: 'Articles'}} icon={PostIcon}/>
      <Resource name="users" list={UserList} options={{label: 'Utilisateurs'}} icon={UserIcon}/>
    </Admin>
)

export default App