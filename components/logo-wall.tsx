import { getContentForLogoWall } from '@/content/queries';
import Clients from './clients';

type Props = {}

const LogoWall = async (props: Props) => {

    const data = await getContentForLogoWall();

    return (
        <Clients content={ data.assetCollection.items } />
    )
};

export default LogoWall