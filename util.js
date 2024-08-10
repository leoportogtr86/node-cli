const getArgValue = (argName) => {
    const arg = process.argv.find((arg) => arg.startsWith(`-${argName}=`));

    if (arg) {
        return arg.split("=")[1];
    }
    return null;
}

module.exports = getArgValue;