import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='border-b'>
        <nav className='container mx-auto px-4'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to='/'>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to='/login'>로그인</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to='/signup'>회원가입</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to='/logout'>로그아웃</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className='flex-1 container mx-auto px-4 py-8'>{children}</main>
    </div>
  );
};
