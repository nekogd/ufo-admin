import styles from './page.module.css';
import { BannerConfigForm } from '@/app/modules/banner-config-form';
import { ComponentPresentation } from '@/app/modules/component-presentation';
import { Container } from '@mui/material';
import { BannerConfigContextProvider } from '@/app/providers/banner-config-context.provider';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <BannerConfigContextProvider>
          <BannerConfigForm />
          <ComponentPresentation />
        </BannerConfigContextProvider>
      </Container>
    </main>
  );
}
