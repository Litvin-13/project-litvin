import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { Images } from './components/images/images';
import { Videos } from './components/videos/videos';
import { Friends } from './components/friends/friends';
import { ImagesItem } from './components/images/imagesitem/imagesitem';
import { Auth } from './components/auth/auth';

export const routes: Routes = [
    {path:'',
        component: MainPage,
    },
    {path:'auth',
        component: Auth,
    },
    {path:'images',
        component: Images,
    },
    {path:'images/:id',
        component: ImagesItem,
    },

    {path:'videos',
        component: Videos,
    },
    // {path:'videos/:id',
    //     component: VideosItem,
    // },
    {path:'friends',
        component: Friends,
    },
    {
    path:'**',
        redirectTo:'',
        pathMatch:'full',
    }
];
