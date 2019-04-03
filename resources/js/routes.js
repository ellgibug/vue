import RecordsMain from './components/RecordsMain';
import RecordsList from './components/RecordsList';
import RecordUpdate from './components/RecordUpdate';

export const routes = [
    {
        path: '/v1',
        component: RecordsMain,
        children:[
            {
                path: '/',
                component: RecordsList
            },
            {
                path: ':id/edit',
                component: RecordUpdate
            },
        ]
    }
];