import FormUser from './components/formUser/FormUser.vue'
import FormCharacter from './components/formCharacter/FormCharacter.vue'
import ViewCharacter from './components/viewCharacter/ViewCharacter.vue'

export const routes = [

    { path: '', name: 'Home', component: FormUser},
    { path: '/formUser', name:'FormUser', component: FormUser},    
    { path: '/formCharacter', name:'FormCharacter', component: FormCharacter},    
    { path: '/viewCharacter', name:'ViewCharacter', component: ViewCharacter},

    { path: '*', component: FormUser}

];