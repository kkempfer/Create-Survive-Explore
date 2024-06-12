#!/bin/bash

for file in ../mods/*.jar.disabled; do mv "$file" "${file%.disabled}"; done
