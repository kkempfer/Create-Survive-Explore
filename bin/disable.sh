#!/bin/bash

for file in ../mods/*.jar; do mv "$file" "${file}.disabled"; done
