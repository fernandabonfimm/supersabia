import { ReactElement } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement<any, any> | null;
};

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};
