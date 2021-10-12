import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import close_login from '../../../assets/images/header/close_login.png';
import PanelItem from './PanelItem';
import Wallet from '../Wallet/Wallet';
import Avatar from '../Wallet/Avatar';
import { useCloseModalContext } from '../../../hooks/useCloseModalContext';
import Initializing from './Initializing';
import Refresh from '../Refresh/Refresh';
import { useHistory } from 'react-router-dom';
import { wallets } from '../../../config/config';
import { WalletsConfig } from '../../../config/types';

function LoginPanel() {
	const wallet = wallets();
	const onClose = useCloseModalContext();
	const [current, setCurrent] = useState<string | false>(false);
	useEffect(() => {
		setCurrent(false);
	}, []);

	const filter = (panel: Array<WalletsConfig>) => {
		if (!current) return panel;
		return wallet.filter((el) => el.title === current);
	};
	const history = useHistory();

	const login = (title: string) => {
		let url = '/user';
		if (title === 'MetaMask') {
			url = '/admin';
		}
		setCurrent(title);
		setTimeout(() => {
			history.push(`/user${url}`);
			onClose();
		}, 1000);
	};

	return (
		<div className={style.panel}>
			<div className={style.panel_close} onClick={onClose}>
				<img src={close_login} alt="close" />
			</div>
			<div className={style.panel_wallet}>
				<Wallet customStyle={'login'}>
					<Avatar />
				</Wallet>
			</div>
			<div className={style.panel_title}>
				<span>Connect your wallet</span>
			</div>
			{current ? (
				<div className={style.panel_initializing}>
					<span>Initializing...</span>
					<Refresh content={() => <Initializing />} isLoading={true} />
				</div>
			) : null}
			<div className={style.panel_content}>
				{filter(wallet).map((el, idx) => {
					return (
						<PanelItem
							title={el.title}
							key={idx}
							icon={el.icon}
							connectorId={el.connectorId}
							bg={el.bg}
							setCurrent={login}
							current={current}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default LoginPanel;
