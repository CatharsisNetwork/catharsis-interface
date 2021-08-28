import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../../assets/database/footer/data';
import Avatar from '../../ui/Wallet/Avatar';
import Logo from '../../ui/Logo/Logo';
import Navbar from '../../ui/Navbar/Navbar';
import Wallet from '../../ui/Wallet/Wallet';
import style from './style.module.scss';
import HeaderModalWallet from '../Header/HeaderModalWallet';
import { useModal } from '../../../hooks/useModal';

function Footer() {
	const [display, setDisplay] = useState<string>('');
	const children = (element: string) => {
		if (element === 'wallet') return <HeaderModalWallet />;
	};

	const { ModalComponent, onOpen } = useModal({
		children,
		setDisplay,
	});
	return (
		<footer className={style.footer}>
			<div className={'_container'}>
				<div className={style.content}>
					<div className={style.footer_navbar}>
						<Navbar customStyle={'footer'} links={links} />
					</div>
					<div className={style.footer_logo}>
						<Logo />
						<div className={style.footer_logo__text}>
							<p>
								Fractional ownership
								<br /> of <span>NFTs</span>
							</p>
						</div>
					</div>

					<div
						className={style.footer_wallet}
						onClick={() => {
							onOpen({ element: 'wallet', style: 'header_wallet' });
							setDisplay('_none');
						}}
					>
						<Wallet customStyle={`header${display}`}>
							<Avatar />
						</Wallet>
						<div className={style.footer_wallet__text}>
							<Link to={'/'}>Terms and conditions</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={style.copyright}>
				<span>All right reserved 2021</span>
			</div>
			<ModalComponent />
		</footer>
	);
}

export default Footer;
