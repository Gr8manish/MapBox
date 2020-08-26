module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'At which path would you like to add this component? (Basic/Layouts/Modals/Specific)?',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'src/plopTemplates/Component/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}.react.tsx',
        templateFile: 'src/plopTemplates/Component/Component.react.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}View.react.tsx',
        templateFile: 'src/plopTemplates/Component/ComponentView.react.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}Reducer.tsx',
        templateFile: 'src/plopTemplates/Component/ComponentReducer.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}Util.tsx',
        templateFile: 'src/plopTemplates/Component/ComponentUtil.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'src/plopTemplates/Component/Component.module.scss.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}.media.scss',
        templateFile: 'src/plopTemplates/Component/Component.media.scss.hbs',
      },
    ],
  });
  plop.setGenerator('route', {
    description: 'Create a Route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your route name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'At which path would you like to add this route?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{lowerCase path}}/{{lowerCase name}}/index.tsx',
        templateFile: 'src/plopTemplates/Route/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}.react.tsx',
        templateFile: 'src/plopTemplates/Route/Route.react.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}View.react.tsx',
        templateFile: 'src/plopTemplates/Route/RouteView.react.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}Reducer.tsx',
        templateFile: 'src/plopTemplates/Route/RouteReducer.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}Util.tsx',
        templateFile: 'src/plopTemplates/Route/RouteUtil.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'src/plopTemplates/Route/Route.module.scss.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{lowerCase path}}/{{lowerCase name}}/{{pascalCase name}}.media.scss',
        templateFile: 'src/plopTemplates/Route/Route.media.scss.hbs',
      },
    ],
  });
};
