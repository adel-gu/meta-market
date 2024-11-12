import CategoriesSection from '../components/CategoriesSection';
import CollectionSection from '../components/CollectionSection';
import CreatorsSection from '../components/CreatorsSection';
import HeroSection from '../components/HeroSection';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<CollectionSection />
			<CreatorsSection />
			<CategoriesSection />
		</div>
	);
};
export default Home;
