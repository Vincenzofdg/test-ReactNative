## Criando a aplicação mobile
```json
> npx react-native init frontend
> cd frontend/
> npm install react-native-gesture-handler
```

### Configurando frontend
- *Arquivo*: android/app/src/main/java/com/frontend/MainActivity.java
```java
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "frontend";
    }
    
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

### Executando
```
> npm run android (react-native run-android)
```
