#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

import data from './data.js';

clear();

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            {
                name: `Send me an ${chalk.bold('email')}?`,
                value: () => {
                    open('mailto:almogm.gutin@gmail.com');
                    console.log('\nDone, see you soon!\n');
                },
            },
            {
                name: 'Quit',
                value: () => console.log('Nice to meet you. Goodbye!\n'),
            },
        ],
    },
];

const formattedData = [
    `${chalk.bold.blue(`                       ${data.name}`)}`,
    '',
    `       ${chalk.bold.italic.white("'The only time success comes before work is in")}`,
    `              ${chalk.bold.italic.white("the dictionary.' - Harvey Specter")}`,
    '',
    `${chalk.bold.white(data.labels.title)}  ${chalk.white(`${data.title}`)}`,
    '',
    `${chalk.bold.white(data.labels.linkedIn)}  ${chalk.gray(data.socials.linkedIn)}`,
    `${chalk.bold.white(data.labels.twitter)}  ${chalk.gray(data.socials.twitter)}`,
    `${chalk.bold.white(data.labels.github)}  ${chalk.gray(data.socials.github)}`,
    `${chalk.bold.white(data.labels.docker)}  ${chalk.gray(data.socials.docker)}`,
    `${chalk.bold.white(data.labels.postman)}  ${chalk.gray(data.socials.postman)}`,
    '',
    `${chalk.bold.white(data.labels.card)}  ${chalk.red('npx')} ${chalk.white('almog-gutin')}`,
    '',
    `${chalk.italic('My name is Almog Gutin. I am a Full-Stack & Devops Developer')}`,
    `${chalk.italic('I wrote my first code when I was in the 4th grade and since')}`,
    `${chalk.italic("then I knew I wanted to become a software developer. I'm a")}`,
    `${chalk.italic('hard worker, who sticks to his values. I know my strengths')}`,
    `${chalk.italic('and weaknesses and I study and work hard in order to build')}`,
    `${chalk.italic('up my weaknesses into strengths.')}`,
];

const me = boxen(formattedData.join('\n'), {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'classic',
    borderColor: 'blue',
});
console.log(me);

const prompt = inquirer.createPromptModule();
prompt(questions).then((answer) => answer.action());
