import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'Ding Jiaxiong 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'user_center_frontend',
          title: 'user_center_frontend',
          href: 'https://github.com/Ding-Jiaxiong/user_center_frontend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Ding Jiaxiong GitHub</>,
          href: 'https://github.com/Ding-Jiaxiong',
          blankTarget: true,
        },
        {
          key: 'user_center_backend',
          title: 'user_center_backend',
          href: 'https://github.com/Ding-Jiaxiong/user_center_backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
