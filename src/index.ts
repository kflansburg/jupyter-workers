import {
  JupyterLiteServer,
  JupyterLiteServerPlugin
} from '@jupyterlite/server';

/**
 * Initialization data for the jupyter-worker extension.
 */
const plugin: JupyterLiteServerPlugin<void> = {
  id: 'jupyter-worker:plugin',
  autoStart: true,
  activate: (app: JupyterLiteServer) => {
    console.log('JupyterLite server extension jupyter-worker is activated!');
  }
};

export default plugin;
