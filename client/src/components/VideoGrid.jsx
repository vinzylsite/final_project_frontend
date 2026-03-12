import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'left' }}>
      {videos.map((v) => (
        <Grid item key={v.id} xs={12} sm={6} md={4} lg={3}>
          <VideoCard video={v} />
        </Grid>
      ))}
    </Grid>
  );
}
 
