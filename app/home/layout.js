import ForYouList from '/components/ForYouList/ForYouList.js';
import FeaturedMedia from '/components/Featured/FeaturedMedia.js';
import Header from '/components/Header/Header.js';
import SideNav from '/components/SideNav/SideNav.js';
import JustAdded from '/components/JustAdded/JustAdded.js';
import PosterView from '/components/PosterView/PosterView.js';

export default function HomeLayout({ children }) {
    return (
        <div style={{ background: 'rgb(2, 27, 64)', background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(119, 30, 135, 1) 100%)', minHeight: '100vh' }}>
            <Header />
            <SideNav />
            <FeaturedMedia />
            <ForYouList />
            <JustAdded />
            <PosterView />
            <main className='content-container'>{children}</main>
        </div>
    )
}