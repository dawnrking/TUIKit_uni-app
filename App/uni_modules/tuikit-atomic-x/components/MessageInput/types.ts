import imageIcon from './assets/nvue_image.png';
import cameraIcon from './assets/nvue_camera.png';
import videoIcon from './assets/video.png';
import voiceIcon from './assets/voice.png';

export interface ToolItem {
  id: string;
  name: string;
  icon: string;
  callback?: () => void;
}

export const DEFAULT_TOOLS: ToolItem[] = [
  { id: 'image', name: '照片', icon: imageIcon },
  { id: 'video', name: '视频', icon: cameraIcon },
  { id: 'voiceCall', name: '语音通话', icon: voiceIcon },
  { id: 'videoCall', name: '视频通话', icon: videoIcon },
  
];
