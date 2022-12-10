import * as React from "react";
import { BottomNavigation, Appbar, Provider } from "react-native-paper";

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
    { key: "app", title: "Приложения", focusedIcon: "cellphone" },
    { key: "settings", title: "Настройки", focusedIcon: "database-settings" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    game: GameRoute,
    app: AppRoute,
    settings: SettingsApp,
  });

  return (
    <Provider>
      <Appbar.Header
        style={[
          {
            height: 0,
            backgroundColor: "#fff",
          },
        ]}
      >
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        barStyle={{ backgroundColor: "#fafafa" }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Provider>
  );
};

export default aboutApp;
