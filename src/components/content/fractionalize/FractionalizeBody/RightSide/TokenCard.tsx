import React from 'react';
import ButtonGroup from '../../../../ui/ButtonGroup/ButtonGroupType';
import Button from '../../../../ui/ButtonGroup/Button';
import style from '../style.module.scss';

function TokenCard() {
	return (
		<div className={style.content_right__token}>
			<ButtonGroup>
				{(active, setActive) => (
					<>
						<Button
							setActive={() => setActive(!active)}
							active={active}
							customStyle={'card'}
							title={() => (
								<>
									<span>1 token</span>
									<p>
										But I must explain to you how all this mistaken idea of
										denouncing pleasure and praising pain
									</p>
								</>
							)}
						/>
						<Button
							customStyle={'card'}
							active={!active}
							setActive={() => setActive(!active)}
							title={() => (
								<>
									<span>Group of tokens</span>
									<p>
										But I must explain to you how all this mistaken idea of
										denouncing pleasure and praising pain
									</p>
								</>
							)}
						/>
					</>
				)}
			</ButtonGroup>
		</div>
	);
}

export default TokenCard;
