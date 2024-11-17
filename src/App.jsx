import './App.css';
import BasicSkeleton from './components/BasicSkeleton';
import AvatarSkeleton from './components/AvatarSkeleton';
import CardSkeleton from './components/CardSkeleton';
import TextSkeleton from './components/TextSkeleton';
import CustomSkeleton from './components/CustomSkeleton';
import DynamicContentSkeleton from './components/DynamicContentSkeleton';
import ThemedSkeleton from './components/ThemedSkeleton';
import ListSkeleton from './components/ListSkeleton';

function App() {
  return (
    <div>
      <BasicSkeleton />
      <TextSkeleton/>
      <CustomSkeleton/>
      <AvatarSkeleton/>
      <DynamicContentSkeleton/>
      <CardSkeleton/>
      <ListSkeleton/>
      <ThemedSkeleton/>
    </div>
  );
}

export default App;
