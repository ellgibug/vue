import Home from './components/Home';
import EditRecord from './components/EditRecord';
import RecordsMain from './components/RecordsMain';
import RecordsList from './components/RecordsList';
import NewRecord from './components/NewRecord';
import RecordUpdate from './components/RecordUpdate';

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/update',
        component: EditRecord
    },
    {
        path: '/records',
        component: RecordsMain,
        children:[
            {
                path: '/',
                component: RecordsList
            },
            {
                path: 'new',
                component: NewRecord
            },
            {
                path: ':id',
                component: RecordUpdate
            }
        ]
    }
];