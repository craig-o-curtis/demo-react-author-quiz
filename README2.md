

This project is from the [Pluralsight React Fundamentals Course](https://app.pluralsight.com/library/courses/react-fundamentals-update/table-of-contents).

The purpose of this README is to document steps on using create-react-app to start an enterprise-level project including:
* React
* React-Router
* Redux

Starting a project
```
create-react-app projectname
cd projectname
yarn start
```

Adding basic Bootstrap
```
yarn add -D bootstrap
```
Then import the css file

Or add Reactstrap


## React Lifecycle Methods
### Mounting
 * constructor - created
 * componentWillMount - DEPRECATED
 * render
 * componentDidMount

### Updating
 * componentWillReceiveProps - DEPRECATED
 * shouldComponentUpdate
 * componentWillUpdate - DEPRECATED
 * render
 * componentDidUpdate

## Testing 
Add Enzyme
```
yarn add -D enzyme enzyme-adapter-react-15
```
Enzyme allows use of:
 * shallow - for rendering of component without child components
 * 
