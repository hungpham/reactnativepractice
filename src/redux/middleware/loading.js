
export default (/* { dispatch } */) => next => action => {
	const { payload } = action;
	console.log('action payload', payload);
	console.log('action type', type);
  if (!payload || !payload.then) {
		
    return next(action);
  }
	const {type} = action;
  const isRequesting = /_PENDING$/.test(type);
	if (isRequesting) {
		console.log('isRequesting....');
	}
  const isCompleted = /_FULFILLED$|_REJECTED$/.test(type);
	if (isCompleted) {
		console.log('isCompleted....');
	}
  return next(action);
};