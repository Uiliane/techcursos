import React from 'react';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';

const PlayerCourse = ({route}) => {
  const playlistID = route.params.playlistID;
  return (
    <View>
      <YouTube
        apiKey="YOUR_API_KEY"
        playlistId={playlistID}
        style={{alignSelf: 'stretch', height: '55%'}}
      />
    </View>
  );
};

export default PlayerCourse;
