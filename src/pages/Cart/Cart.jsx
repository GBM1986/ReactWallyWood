import CartList from "../../components/CartList/CartList.jsx";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

export const Cart = () => {
	return (
		<ContentWrapper title="Indkøbskurv">
            <Navbar />
			<CartList />
            <Footer />
		</ContentWrapper>
        

	);
}