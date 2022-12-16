import * as React from "react";
import { BottomNavigation, Provider, MD3LightTheme } from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

import InfoPage from "./components/settings/InfoPage";
import GamePage from "./components/GamePage";
import AppPage from "./components/AppPage";

const GameRoute = () => <GamePage />;
const AppRoute = () => <AppPage />;
const SettingsApp = () => <InfoPage />;


const aboutApp = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "game", title: "Игры", focusedIcon: "gamepad" },
    { key: "app", title: "Приложения", focusedIcon: "mobile" },
    { key: "settings", title: "Настройки", focusedIcon: "gear" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    game: GameRoute,
    app: AppRoute,
    settings: SettingsApp,
  });

  const theme = {
    ...MD3LightTheme,
    custom: 'property',
    colors: {
      ...MD3LightTheme.colors,
      brandPrimary: '#fefefe',
      brandSecondary: 'red',
    },
  };

  
  return (
    <Provider
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      <BottomNavigation
        navigationState={{ index, routes }}
        barStyle={{ backgroundColor: '#fafafa' }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        theme={theme}
        keyboardHidesNavigationBar="true"
      />
    </Provider>
  );
};

export default aboutApp;
