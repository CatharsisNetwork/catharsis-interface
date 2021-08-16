import React from 'react';
import style from './style.module.scss';

import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { getActiveClassName } from '../../../utils/lib/getActiveClassName';

export interface IRefreshProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isLoading: boolean;
    children: () => React.ReactNode
}


const Refresh: React.FC<IRefreshProps> = ({
                                              isLoading,
                                              children
                                          }) => {

    return (
        <div
            className={getActiveClassName(style,"loader",isLoading)}
        >
            {children()}
        </div>
    );
};
export default Refresh
