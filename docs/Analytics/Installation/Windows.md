---
sidebar_position: 2
title: Windows CUDA Inference
---
#### Windows CUDA Inference

 The system requires a CUDA-related runtime environment, installation of the CUDA driver and TensorRT support library, and acquisition of model files.

#### Install the CUDA Driver For Windows

The CUDA driver comes with its own GPU driver, so there is no need to install the GPU driver separately before installing the CUDA driver.The currently used version of CUDA is CUDA_11.8.0_522.06_windows.

You can access the following link to download https://developer.nvidia.com/cuda-downloads    

You can also directly click the following link to download:

https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_522.06_windows.exe

 After downloading, simply install it using the default configuration.

#### Installation Of Windows TensorRT Support Library

 Contact technical support to obtain the tensorrt.zip package, and extract the package to C:\gpu\nvidia\tensorrt. The final directory structure is as follows:

![00-SettingWinGPUTersorrt](./Img/00-SettingWinGPUTersorrt.png)

#### Model File Installation

 Contact technical support to obtain the model file package egplus.zip, and place the files in egplus\egpluscudamodel into the modules\ai\egplus\egpluscudamodel directory. The final directory structure is as follows:

![00-SettingWinGPUEgplus](./Img/00-SettingWinGPUEgplus.png)

After the installation is complete, restart the USC service and navigate to Analysis-》Settings-》Inference Service Configuration. You should be able to view the CUDA driver version and the CUDA runtime version. Please refer to the figure below for reference:

![00-SettingCUDAVer](./Img/00-SettingCUDAVer.png)

The system will generate an optimized model based on the GPU model during the first startup, which takes about 5 minutes. There will be a prompt in the Analyze-》Settings-》Inference Service Status, as shown in the following figure:

![00-SettingNGPUInit](./Img/00-SettingNGPUInit.png)