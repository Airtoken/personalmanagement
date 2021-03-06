package com.ycz.interceptor;

import com.ycz.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author admin
 */
@Component
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private BaseInterceptor baseInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(baseInterceptor)
                .excludePathPatterns("/admin/assets/**")
                .excludePathPatterns("/admin/images/**")
                .excludePathPatterns("/admin/imgs/**")
                .excludePathPatterns("/admin/js/**")
        ;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler("/upload/**").addResourceLocations("file:"+ FileUploadUtil.getUploadFilePath()+"upload/");
    }
}
